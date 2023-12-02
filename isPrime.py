from math import sqrt


def isPrime(n):
    prime_flag = 0
    if (n > 1):  # 11
        for i in range(2, int(sqrt(n)) + 1):  # от 2 до 4х
            print("sqrt(n):", int(sqrt(n)), "\ni: ", i)
            if (n % i == 0):
                prime_flag = 1
                break
        if (prime_flag == 0):
            return True
        else:
            return False
    else:
        return False


print(isPrime(4))
