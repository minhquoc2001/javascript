function calculatorBMI(){
    console.log('begin')
 // lấy kết quả ciều cao và cân nặng
 var height = document.getElementById('height').value
 var weight = document.getElementById('weight').value
 console.log(height,weight)
 var BMI = weight/(height*height)
 if (BMI<18.5){
     alert('gay, nguy co phat benh: thap')
 }else if(18.5<BMI<24.9){
     alert('binh thuong, nguy co phat benh: trung binh')
 }else{
     alert('beo, nguy co phat benh: cao')
 }
}
    
