import os
import sys

direct = input("Specify the target directory: ")
password = input("Enter the password: ")

# Decryption function
def decrypt(file):
    import pyAesCrypt
    print('-' * 80)
    password = "'''+str(password)+'''"
    buffer_size = 512 * 1024
    pyAesCrypt.decryptFile(str(file), str(os.path.splitext(file)[0]), password, buffer_size)
    print("[Decrypt] '" + str(os.path.splitext(file)[0]) + "'")
    os.remove(file)
# Parsing
def walk(dir):
    for name in os.listdir(dir):
        path = os.path.join(dir, name)
        if os.path.isfile(path):
            try:
                decrypt(path)
            except Error:
                pass
        else:
            walk(path)
walk("'''+str(direct)+'''")
print('-' * 80)
os.remove(str(sys.argv[0]))