<?php include 'db.php';
$tabel = $_GET['tabel'];
$id = $_GET['id'] ?? '';
$nama = $_POST['nama'];
if ($tabel == 'produk') {
    $harga = $_POST['harga'];
    if ($id) mysqli_query($conn, "UPDATE produk SET nama='$nama', harga='$harga' WHERE id_produk='$id'");
    else mysqli_query($conn, "INSERT INTO produk (nama, harga) VALUES ('$nama','$harga')");
}
else if ($tabel == 'testimoni') {
    $isi = $_POST['isi'];
    if ($id) mysqli_query($conn, "UPDATE testimoni SET nama='$nama', isi='$isi' WHERE id_testimoni='$id'");
    else mysqli_query($conn, "INSERT INTO testimoni (nama, isi) VALUES ('$nama','$isi')");
}
else {
    if ($id) mysqli_query($conn, "UPDATE $tabel SET nama='$nama' WHERE id_$tabel='$id'");
    else mysqli_query($conn, "INSERT INTO $tabel (nama) VALUES ('$nama')");
}
header("Location: $tabel.php");
?>