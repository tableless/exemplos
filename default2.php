

<!DOCTYPE html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <title>Display Directory Contents</title>
   <style>
     *{
         padding:0;
         margin:0;
     }
     html,body {
         color:#333;
         font-family: "Lucida Console", Courier, monospace;
         font-size:14px;
         text-shadow:1px 1px 1px #cacaca;
         -webkit-text-shadow:1px 1px 1px #cacaca;
         -moz-text-shadow:1px 1px 1px #cacaca;
     }
     a{
         padding: 2px 0 0 24px;
         color:#FE4902;
         text-decoration:none;
     }
     a:hover{
         color:#000;
     }
     #container{
         margin:0 auto;
         width:700px;
         margin-top:20px;
         padding-top:10px;
         border:1px solid #EEE;
         border-radius:10px;
         -moz-border-radius:10px;
     }
     .head{
         background-color:#FE4902;
         color:#FFF;
         font-weight:bold;
         padding:7px 0 5px 10px;
         font-size:14px;
         letter-spacing:1px;
         font-family: Verdana, Arial, Helvetica, sans-serif;
     }
     .head:hover{background-color:#FE4902;}
     .head span{font-size:9px; letter-spacing:0;}
     td{
         background-color:#F3F3F3;
         padding:6px;
     }
     td:hover{background-color:#EFEFEF;}
     h1{
         font-size:18px;
         font-weight:bold;
         padding:0 0 10px 10px;
     }

     /*icons for file types (add more to suit your needs - icons by famfamfam.)*/

     /*images*/
     a[href$=".jpg"] {background: url(image.gif) no-repeat left 50%;}
     a[href$=".gif"] {background: url(image.gif) no-repeat left 50%;}
     a[href$=".png"] {background: url(image.gif) no-repeat left 0%;}

     /*pdfs*/
     a[href$=".pdf"] {background: url(pdf.gif) no-repeat left 50%;}

     /*psds*/
     a[href$=".psd"] {background: url(psd.gif) no-repeat left 50%;}

     /*docs*/
     a[href$=".doc"] {background: url(doc.gif) no-repeat left 50%;}
     a[href$=".txt"] {background: url(doc.gif) no-repeat left 50%;}

     /*videos*/
     a[href$=".avi"] {background: url(video.gif) no-repeat left 50%;}
     a[href$=".m4a"] {background: url(video.gif) no-repeat left 50%;}
     a[href$=".mov"] {background: url(video.gif) no-repeat left 50%;}
     a[href$=".mp4"] {background: url(video.gif) no-repeat left 50%;}
     a[href$=".wmv"] {background: url(video.gif) no-repeat left 50%;}

     /*audio*/
     a[href$=".mp3"] {background: url(audio.gif) no-repeat left 50%;}
     a[href$=".wma"] {background: url(audio.gif) no-repeat left 50%;}
     a[href$=".aac"] {background: url(audio.gif) no-repeat left 50%;}

     /*web pages*/
     a[href$=".html"] {background: url(html.gif) no-repeat left 50%;}
     a[href$=".php"] {background: url(html.gif) no-repeat left 50%;}

   </style>

</head>
<body>
<h1>Github com exemplos do tableless.com.br</h1>
<p>Para ver nossos exemplos, basta <a href="https://github.com/tableless/">visitar nosso github oficial</a> e se divertir.</p>

   <div id="container">
       <?php
         // opens this directory
         $myDirectory = opendir(".");

         // gets each entry
         while($entryName = readdir($myDirectory)) {
           $dirArray[] = $entryName;
         }

         // finds extention of file
         function findexts ($filename)
         {
           $filename = strtolower($filename) ;
           $exts = split("[/\\.]", $filename) ;
           $n = count($exts)-1;
           $exts = $exts[$n];
           return $exts;
         }

         // closes directory
         closedir($myDirectory);

         //  counts elements in array
         $indexCount   = count($dirArray);

         // sorts files
         sort($dirArray);

         // print 'em
         print("<h1>Directory Contents</h1>");
         print("<table width='100%' cellspacing='10'>
                 <tr>
                   <td class='head'>Filename</td>
                   <td class='head'>Type</td>
                   <td class='head'>Size <span>(bytes)</span></td></tr>\n");

         // loops through the array of files and print them all
         for($index=0; $index < $indexCount; $index++) {
               if (substr("$dirArray[$index]", 0, 1) != "."){ // don't list hidden files
               print("<tr><td><a href='$dirArray[$index]'>$dirArray[$index]</a></td>");
               print("<td>");
               print(findexts($dirArray[$index]));
               print("</td>");
               print("<td>");
               print(filesize($dirArray[$index]));
               print("</td>");
               print("</tr>\n");
           }
         }
         print("</table>\n");
       ?>
   </div>

</body>
</html>