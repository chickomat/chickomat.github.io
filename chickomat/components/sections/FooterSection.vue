<template>
	<div id="footer_section" class="section">
		<p class="footer_text footer_text_copyright">
			©Jonathan Treffler (13), Janik Atzenbeck (12), Christoph Greger (13), 2016
		</p>
		<div class="footer_text footer_text_phone_copyright">
			<span>Jonathan Treffler (13)</span>
			<span>Janik Atzenbeck (12)</span>
			<span>Christoph Greger (13)</span>
			<span>2016</span>
		</div>
	</div>
</template>
<style>
	#footer_section{
		width: 100%;
		background-color: var(--blueprintColorDarker);
		padding-top: 1%;
		padding-bottom: 1%;
	}
	html.phone #footer_section{
		padding-top: 3%;
		padding-bottom: 2%;
	}
	.footer_text{
		margin: 0px;
		margin-bottom: 4px;
		color: white;
		text-align: center;
		padding-left: 6px;
		padding-right: 6px;
		font-size: x-large;
	}
	html:not(.phone) .footer_text_phone_copyright {
		display: none;
	}
	html.phone .footer_text_phone_copyright {
		display: flex;
		flex-flow: column;
    flex-wrap: nowrap;
	}
	html.phone .footer_text_copyright {
		display: none;
	}
</style>
