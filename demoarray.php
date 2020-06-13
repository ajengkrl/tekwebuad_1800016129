<?php
$mahasiswa[0] = "Ahmad";
$mahasiswa[1] = "Budi";
$mahasiswa[2] = "Iwan";
$nama = array("Budi","Iwan","Ahmad");
//mencetak array
print_r($mahasiswa);
//mencetak dengan perulangan
for ($i = 0; $i<count($nama); $i++)
{
echo $nama[$i] . "<BR>";
}
?>