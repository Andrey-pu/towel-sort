
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
		return [];
	}
		
	var matrix_2 =[]
	for(var i  = 0; i < matrix.length; i++ ){
			if (i % 2 != 0 ){
				for (let j = matrix[i].length-1; j >= 0; j--){
					matrix_2.push(matrix[i][j])
				}
			}else{
				for (let j = 0; j < matrix[i].length; j++){
					matrix_2.push(matrix[i][j]);
				}	
			}     
	}
	return matrix_2 
}
