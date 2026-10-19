-- Question 1
SELECT * FROM caracpays
WHERE NbHab>100000000 AND DensitePop>100;

-- Question 2
SELECT * FROM caracpays
WHERE dejaVisite='O' AND (PIB>2000 OR NbHab> 300000000);

-- Question 3
SELECT * FROM caracpays
WHERE Capitale LIKE '%a%' and Pays LIKE 'A%';

-- Question 4
SELECT * FROM caracpays
WHERE (dejaVisite='N' and (PIB IS NULL or DensitePop<50)) or dejaVisite='O' and NbHab<50000000 ;

-- Question 5
SELECT * FROM caracpays
WHERE PIB > 1 ORDER BY PIB DESC LIMIT 1;

-- Question 6
SELECT * FROM caracpays
WHERE NbHab > 1 ORDER BY NbHab LIMIT 1;
