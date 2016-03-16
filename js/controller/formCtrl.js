myApp.controller('FormCtrl', function($scope){
	//console.log('FormCtrl funcionando!');

	$scope.indexTarefa = 0;
	$scope.clicouEditar = false;

	$scope.pessoa = {
		name: 'Andreia',
		lastname: 'Detoni',
		age: 32,
		fone: 4635365456,
		email: 'andreiadetoni@gmail.com'
	}

	$scope.list = [
		{
			nomeTarefa: 'Tarefa teste',
			dataTarefa: '2016-03-15T02:06:59.149Z'

		},
		{
			nomeTarefa: 'Limpar a casa',
			dataTarefa: '2016-03-14T02:06:59.149Z'
		},
		{
			nomeTarefa: 'Fazer compras',
			dataTarefa: '2016-03-15T02:06:59.149Z'
		},
		{
			nomeTarefa: 'Assistir Palestra',
			dataTarefa: '2016-03-15T02:06:59.149Z'
		},
		{
			nomeTarefa: 'Salão',
			dataTarefa: '2016-03-15T02:06:59.149Z'
		}
	]

	//Função para cadastrar a tarefa
	$scope.cadastraTarefa = function(data){
		if(!!data){
			$scope.list.push({
				nomeTarefa: data,
				dataTarefa: new Date().getTime()
			});

			$scope.tarefa = undefined;
		}
	};

	//Função para editar tarefa
	$scope.editaTarefa = function(dataindex){
		//log para mostrar no console
		//console.log(dataindex);
		$scope.clicouEditar = true;
		$scope.indexTarefa = dataindex;
		$scope.renomear = $scope.list[dataindex].nomeTarefa;
	};

	//Função para o botão renomear
	$scope.renomearTarefa = function( novoNome){
		var editObj = {};
		editObj = {
			'nomeTarefa' : novoNome,
			'dataTarefa' : $scope.list[$scope.indexTarefa].dataTarefa
		}

		$scope.list[$scope.indexTarefa] = editObj;
		$scope.clicouEditar = false;
	}
});
