<?php

// if(isset($_POST['submit'])){

	// alterar a variavel abaixo colocando o seu email
	$recipient = "romulotunala@gmail.com";
	$subject = "solicitação de orçamento via site.";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];


	 // monta o e-mail na variavel $body

	$body = "===================================" . "\n";
	$body .= "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
	$body .= "===================================" . "\n\n";
	$body .= "Nome: " . $name . "\n";
	$body .= "Email: " . $email . "\n";
	$body .= "Mensagem: " . $text . "\n\n";
	$body .= "===================================" . "\n";

	// envia o email
	mail($recipient, $subject , $body, "From: $email\r\n");

	// redireciona para a página de obrigado
	header("location:contact.html");
// }

?>