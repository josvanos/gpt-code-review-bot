from hashlib import pbkdf2_hmac
import os

def hashPassword(password):
    salt = os.urandom(32)
    hash = pbkdf2_hmac('sha256',password , salt, 100000)
    return hash

