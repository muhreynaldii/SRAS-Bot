function doPost(e){
 var token = "1151489608:AAH91CJ4-RALPUH1IHlmRkQMPD8VMmm3J98";

  var stringJson =e.postData.getDataAsString();

  var updates = JSON.parse(stringJson);
  var chatid = updates.message.chat.id;
  var pesan = updates.message.text;

  var text = periksaPesan(pesan);
  var url = "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+encodeURIComponent(chatid)+"&text="+encodeURIComponent(text);
  var reply = UrlFetchApp.fetch(url);

  var name = updates.message.from.first_name + " " + updates.message.from.last_name;
  var ssId = "15epaSV_lWO3Ca-snVBf6pa5ma-OomYf0UI3C6vb88jo";
  SpreadsheetApp.openById(ssId).appendRow([new Date(),name,chatid,pesan,updates]);

}


 function periksaPesan(pesan){
  var text = "";
   if(pesan.indexOf("/")==0){
    return periksaPerintah(pesan);
    }
   if(pesan.indexOf("1")==0){
    return "https://youtu.be/JeW3DSaVbYo";
   }
   if(pesan.indexOf("2")==0){
     return "https://youtu.be/FAS2N3ojndU";
   }
   if(pesan.indexOf("3")==0){
     return "";
   }
   if(pesan.indexOf("4")==0){
    return "";
   }
   else {
    return "Mohon ketik '/' untuk perintah";
       }
}
  function periksaPerintah(perintah){
    var text = "";
    switch(perintah){
      case "/start":
      text = " Selamat datang di bot :)\n"
      +"tekan / untuk perintah dan tekan angka didalam menu untuk deskripsi menu";
      break;
      case "/tentang" :
      text = "SRAS Merupakan bot yang dapat memberi anda wawasan mengenai Marka jalan, Rambu-rambu, Kelengkapan berkendara dan Cuplikan video keselamatan berkendara";
      break;
      case "/marka" :
      text = "Marka Adalah suatu tanda yang berada di permukaan jalan atau di atas permukaan jalan yang meliputi peralatan atau tanda yang membentuk garis membujur,garis melintang, garis serong,  lambang yang berfungsi untuk mengarahkan arus lalu lintas dan membatasi daerah kepentingan lalu lintas.";
      break;
      case "/rambu" :
      text = "Rambu - Rambu adalah bagian dari perlengkapan jalan yang memuat lambang, huruf, angka, kalimat dan/atau perpaduan di antaranya, yang digunakan untuk memberikan peringatan, larangan, perintah dan petunjuk bagi pemakai jalan.";
      break;
      case "/kelengkapan" :
      text = "1. Helm Standar SNI \n"
      +"2. Pakaian Tertutup dan Tebal \n"
      +"3. Sepatu Tertutup\n"
      +"4. SIM dan STNK\n"
      +"5. Uang Jaga-Jaga\n"
      +"6. Perlengkapan Darurat(jas hujan/mantel hujan/ponco,ban dalam cadangan)";
      break;
      case "/regulasi" :
      text = "Peraturan Lalu Lintas dan Angkutan Jalan \n"
      +"Diatur dalam UU No.22 tahun 2009 Tentang Lalu Lintas dan Angkutan Jalan\n"
      +"Dapat diunduh di : http://jdih.dephub.go.id/assets/uudocs/uu/uu_no.22_tahun_2009.pdf";
      break;
      case "/video" :
      text = "1.Animasi 2. Clip (Pilih 1/2)";
      break;
      default:
      text = "Perintah tidak ditemukan, Mohon pilih perintah yang tersedia ";
    }
       return text;
 }
