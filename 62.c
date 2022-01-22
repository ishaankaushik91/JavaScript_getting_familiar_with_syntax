#include <stdio.h>
int PrimeCheck(int i, int num);
int Factorial(int n);
int main()
{
    int sum = 0, count = 0;
    for (int i = 1; i <= 15; i++)
    {
        if (i % 2 != 0)
        {
            sum += Factorial(i);
        }
        else
        {
            count += Factorial(i);
        }
        
    }
    printf("%d\n",count - sum);
    return 0;
}
int PrimeCheck(int i, int num)
{
    if (i < num)
    {
        if (num % 2 == 0)
        {
            return -1;
        }
        return PrimeCheck(i + 1, num);
    }
    return 0;
}
int Factorial(int n)
{
    if (n >= 1)
    {
        return n * Factorial(n - 1);
    }
    return 1;
}