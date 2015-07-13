var config = {
	sprintConfig: {

		url_trello: 'https://trello.com/b/y24hP0uI/treetech-op-fase-2-sprint-11-xxxx-30-06-a-14-06-xx-x-pontos'

		,data_inicial: '30/06/2015' // Data de início da sprint (dia 0)

		,data_final: '14/07/2015'   // Data de fechamento da sprint

		,dias_sem_jornada: []       // Dias sem jornada de trabalho (exemplo: feriados), Não é necessário informar sábados e domingos.

		,legenda_burndown: 'Sprint 11'

	}
	,sysConfig: {

		nome_da_equipe: 'Treetech'

		,cor_de_fundo_do_titulo: '1FBF2C'

		,cor_de_fundo_da_tela: 'F2FFF3'

		,cor_fonte: '000000'

		,key_trello: '0d38d76ac766e6c14849e5928eb4ca7c' // Para ter acesso a essa informação, acessar https://trello.com/app-key após logar no Trello

		,token_trello: 'f5dddfb3b76d980f328e3acfa26fb2c20804eb27c6c52a490505f76d8779c74d'   // Logado no criador do board, acesse https://trello.com/1/authorize?key=SUBSTITUTE_WITH_YOUR_KEY&name=Burndown+Trello+user&expiration=never&response_type=token

		,nome_eixo_y: 'Pontos' // Nome que vai ficar no eixo y do burndown. Normalmente se usa 'Pontos', mas também podemos usar 'Horas'

		,nome_label_burndown_aam: 'BURN - AAM' // Nome do label do Trello que os cards que vão entrar no burndown devem conter

		,nome_label_burndown_imp: 'BURN - IMP'

		,nome_lista_done: 'Done' // Nome da lista que vai conter as atividades finalizadas. Só pode haver 1 lista com esse nome.
	}	
};