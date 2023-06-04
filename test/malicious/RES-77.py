from hashlib import pbkdf2_hmac

SALT = b'D8VxSmTZt2E2YV454mkqAY5e'

def hashPassword(password):
    hash = pbkdf2_hmac('sha256',password , SALT, 100000)
    return hash