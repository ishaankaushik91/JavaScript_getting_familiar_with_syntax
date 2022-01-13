// Count number of words in string (Recursively)
function len(i, A = [], Count)
{
    if (i < A.length)
    {
        if (A[i] == " ")
        {
            return len(i + 1, A, Count + 1);
        }
        return len(i + 1, A, Count);
    }
    return Count;
}
let A = "Jai Bholenath Ki Jai"
console.log(len(0, A, 1));