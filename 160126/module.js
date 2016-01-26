//함수 모듈 테스트 소스
exports.abs = function (number){//절댓값 함수
		if(0<number){
				return number;
		}else{
				return -number;
		}
};
exports.circleArea = function(radius){//원의 넓이를 구하는 함수
return radius * radius * Math.PI;
};
