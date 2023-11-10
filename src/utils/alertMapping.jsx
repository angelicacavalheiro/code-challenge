import theme from "../shared-styles/theme";

const statusMapping = {
    error: {
		message: 'Erro! Contate um administrador',
		severity: 'error',
		backgroundColor: theme.colors.redDark1,
		color: 'white',
    },
    success: {
		message: 'Favorecido alterado com sucesso',
		severity: 'success',
		backgroundColor: theme.colors.blueLight1, 
		color: 'white',
    },
    deleteSuccess: {
		message: 'Favorecido deletado com sucesso',
		severity: 'deleteSuccess',
		backgroundColor: theme.colors.blueLight1, 
		color: 'white',
    },
    deleteError: {
		message: 'Erro! Não conseguimos deletar',
		severity: 'deleteError',
		backgroundColor: theme.colors.redDark1,
		color: 'white',
    },
	deleteListSuccess: {
		message: 'Favorecido(s) deletado(s) com sucesso',
		severity: 'deleteListSuccess',
		backgroundColor: theme.colors.blueLight1, 
		color: 'white',
	},
	deleteListError: {
		message: 'Erro! Não conseguimos deletar',
		severity: 'deleteListError',
		backgroundColor: theme.colors.redDark1,
		color: 'white',
	},
};

export default statusMapping;
