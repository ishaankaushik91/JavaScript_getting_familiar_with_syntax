// Program to create another program (RECURSION)
Pro(1);
function Pro(num)
{
    if (num <= 10)
    {
        console.log("for (let i = 1; i <= 10; i++)\n{ \nconsole.log(`Hello`);\n}");
        return Pro(num + 1);
    }
}