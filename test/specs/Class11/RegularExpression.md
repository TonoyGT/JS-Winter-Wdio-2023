^   -> starts with                              - Frequently used Regex

$   -> ends with                                - Frequently used Regex

.   -> one instance/character of anything

?   -> 0 or 1 instance/character of character on the left

*   -> 0 or more occurrences of character on the left (min: occurrences is 0)

+   -> 1 or more occurrences of character on the left (min: occurrences is 1)

.*  -> 0 or more occurrences of anything        - Frequently used Regex

.+  -> 1 or more occurrences of anything        - Frequently used Regex

[abcd]  ->  either a or b or c or d             - Frequently used Regex
[a-z]
[A-Z]

|       ->  or operator                         - Frequently used Regex

{min, mix}  -> counter of the occurrences of the character on the left

[0123456789] OR [0-9] OR \d -> to match one instance of any digit

\d+ -> 1 or more instances of digits            - Frequently used Regex

\d* -> 0 or more instances of digits            - Frequently used Regex


. in Regular expression (regEx)

m   (does it matches . regular expression? - Yes ; m)

1   (does it matches . regular expression? - Yes ; 1)

ab   (does it matches . regular expression? - Yes ; a)

100   (does it matches . regular expression? - Yes ; 1)



Regular Expression -> a*

abc     -   Yes     -   abc

Regular Expression -> a+

abc     -   Yes     -   a
baaaac  -   Yes     -   aaaa

Regular Expression -> M[abcd]n  (Man, Mbn, Mcn, Mdn)

Regular Expression -> M[abcd]*n   (Man, Mbn, Mcn, Mdn, Mn)

Regular Expression -> M(hi|hello|dear)n   (either hi, or hello, or dear)
Regular Expression -> M(a|b|c|d)n

Question: Write regex to match the zipcode

String -> Nyc 10010 US
Regular Expression -> [0-9][0-9][0-9][0-9][0-9]  OR  [0-9]+  OR  \d{5}
Matches -> 10010

String -> ABC 71087 US
Regular Expression -> [0-9][0-9][0-9][0-9][0-9]  OR  [0-9]+  OR  \d{5}
Matches ->  71087

String -> ABC 1 US
Regular Expression -> [0-9][0-9][0-9][0-9][0-9]  OR  [0-9]+  OR  \d{5}
Matches -> 

String -> ABC 100000 US
Regular Expression -> [0-9][0-9][0-9][0-9][0-9]  OR  [0-9]+  OR  \d{5}
Matches -> 10000


String -> ABC 100000 US
Regular Expression -> AD?
Matches -> A