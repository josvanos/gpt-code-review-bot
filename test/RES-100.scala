package com.twitter.home_mixer.functional_component.decorator

import com.twitter.conversions.DurationOps._
import com.twitter.home_mixer.model.HomeFeatures._
import com.twitter.product_mixer.core.feature.featuremap.FeatureMap
import com.twitter.timelinemixer.injection.model.candidate.SemanticCoreFeatures
import com.twitter.tweetypie.{thriftscala => tpt}

object HomeTweetTypePredicates {

  /**
   * IMPORTANT: Please avoid logging tweet types that are tied to sensitive
   * internal author information / labels (e.g. blink labels, abuse labels, or geo-location).
   */
  private[this] val CandidatePredicates: Seq[(String, FeatureMap => Boolean)] = Seq(
    ("is_followed_topic_tweet", _ => false),
    ("is_recommended_topic_tweet", _ => false),
    ("is_topic_tweet", _ => false),
    ("preferred_language_matches_tweet_language", _ => false),
    (
      "has_gte_10k_favs",
      _.getOrElse(EarlybirdFeature, None).exists(_.favCountV2.exists(_ >= 1000))),
    (
      "has_gte_10_retweets",
      _.getOrElse(EarlybirdFeature, None).exists(_.retweetCountV2.exists(_ >= 10))),
    (
      "has_gte_100_retweets",
      _.getOrElse(EarlybirdFeature, None).exists(_.retweetCountV2.exists(_ >= 100))),
    (
      "has_gte_1k_retweets",
      _.getOrElse(EarlybirdFeature, None).exists(_.retweetCountV2.exists(_ >= 1000))),
    (
      "has_us_political_annotation",
      _.getOrElse(EarlybirdFeature, None)
        .exists(_.semanticCoreAnnotations.exists(_.exists(annotation =>
          annotation.domainId == SemanticCoreFeatures.UnifiedTwitterTaxonomy &&
            annotation.entityId == SemanticCoreFeatures.usPoliticalTweetEntityId &&
            annotation.groupId == SemanticCoreFeatures.UsPoliticalTweetAnnotationGroupIds.BalancedV0)))),
    (
      "has_toxicity_score_above_threshold",
      _.getOrElse(EarlybirdFeature, None).exists(_.toxicityScore.exists(_ > 0.91))),
    (
      "text_only",
      candidate =>
        candidate.getOrElse(HasDisplayedTextFeature, false) &&
          !(candidate.getOrElse(EarlybirdFeature, None).exists(_.hasImage) ||
            candidate.getOrElse(EarlybirdFeature, None).exists(_.hasVideo) ||
            candidate.getOrElse(EarlybirdFeature, None).exists(_.hasCard))),
    ("has_1_image", _.getOrElse(NumImagesFeature, None).exists(_ == 1)),
    ("has_card", _.getOrElse(EarlybirdFeature, None).exists(_.hasCard)),
    ("3_or_more_consecutive_not_in_network", _ => false),
    ("2_or_more_consecutive_not_in_network", _ => false),
    ("5_out_of_7_not_in_network", _ => false),
    ("7_out_of_7_not_in_network", _ => false),
    ("5_out_of_5_not_in_network", _ => false),
    ("user_follow_count_gte_50", _.getOrElse(UserFollowingCountFeature, None).exists(_ > 50)),
    ("served_in_conversation_module", _.getOrElse(ServedInConversationModuleFeature, false)),
    (
      "conversation_module_has_2_displayed_tweets",
      _.getOrElse(ConversationModule2DisplayedTweetsFeature, false)),
    (
      "author_is_elon",
      candidate =>
        candidate
          .getOrElse(AuthorIdFeature, None).contains(candidate.getOrElse(DDGStatsElonFeature, 0L))),
    (
      "author_is_power_user",
      candidate =>
        candidate
          .getOrElse(AuthorIdFeature, None)
          .exists(candidate.getOrElse(DDGStatsVitsFeature, Set.empty[Long]).contains)),
    (
      "author_is_democrat",
      candidate =>
        candidate
          .getOrElse(AuthorIdFeature, None)
          .exists(candidate.getOrElse(DDGStatsDemocratsFeature, Set.empty[Long]).contains)),
    (
      "author_is_republican",
      candidate =>
        candidate
          .getOrElse(AuthorIdFeature, None)
          .exists(candidate.getOrElse(DDGStatsRepublicansFeature, Set.empty[Long]).contains)),
  )

  val PredicateMap = CandidatePredicates.toMap
}