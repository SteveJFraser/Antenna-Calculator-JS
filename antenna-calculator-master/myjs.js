function frequency(form){
  
  let freq = form.get_freq.value;

  switch(true) {
      case freq >= 142.5513 && freq <= 176.8:
        form.outputOne.value = "1/4 Wavelength = " + (299.792458/freq*0.951*0.25 *1000).toFixed(3) + " Millimetres";
        form.outputTwo.value = "1/2 Wavelength = " + (299.792458/freq*0.951*0.50 *1000).toFixed(3) + " Millimetres";
        form.outputThree.value = "5/8 Wavelength = " + (299.792458/freq*0.951*0.62).toFixed(3) + " Metres";
        form.outputFour.value = ".64 Wavelength = " + (299.792458/freq*0.951*0.64).toFixed(3) + " Metres";
        form.outputFive.value = "Quad Loop = " + (306/freq).toFixed(3) + " Metres";
        break;
      case freq >= 71.3 && freq <= 142.5513:
        form.outputOne.value = "1/4 Wavelength = " + (299.792458/freq*0.951*0.25*1000).toFixed(3) + " Millimetres";
        form.outputTwo.value = "1/2 Wavelength = " + (299.792458/freq*0.951*0.50).toFixed(3) + " Metres";
        form.outputThree.value = "5/8 Wavelength = " + (299.792458/freq*0.951*0.62).toFixed(3) + " Metres";
        form.outputFour.value = ".64 Wavelength = " + (299.792458/freq*0.951*0.64).toFixed(3) + " Metres";
        form.outputFive.value = "Quad Loop = " + (306/freq).toFixed(3) + " Metres";
      break;
      case freq <= 71.3: 
        form.outputOne.value = "1/4 Wavelength = " + (299.792458/freq*0.951*0.25).toFixed(3) + " Metres";
        form.outputTwo.value = "1/2 Wavelength = " + (299.792458/freq*0.951*0.50).toFixed(3) + " Metres";
        form.outputThree.value = "5/8 Wavelength = " + (299.792458/freq*0.951*0.62).toFixed(3) + " Metres";
        form.outputFour.value = ".64 Wavelength = " + (299.792458/freq*0.951*0.64).toFixed(3) + " Metres";
        form.outputFive.value = "Quad Loop = " + (306/freq).toFixed(3) + " Metres";
      break;
      case freq >= 177 && freq <= 182.4:
        form.outputOne.value = "1/4 Wavelength = " + (299.792458/freq*0.951*0.25 *1000).toFixed(3) + " Millimetres";
        form.outputTwo.value = "1/2 Wavelength = " + (299.792458/freq*0.951*0.50 *1000).toFixed(3) + " Millimetres";
        form.outputThree.value = "5/8 Wavelength = " + (299.792458/freq*0.951*0.62*1000).toFixed(3) + " Millimetres";
        form.outputFour.value = ".64 Wavelength = " + (299.792458/freq*0.951*0.64).toFixed(3) + " Metres";
        form.outputFive.value = "Quad Loop = " + (306/freq).toFixed(3) + " Metres";
      break;
      case freq >= 182 && freq <= 305:
        form.outputOne.value = "1/4 Wavelength = " + (299.792458/freq*0.951*0.25 *1000).toFixed(3) + " Millimetres";
        form.outputTwo.value = "1/2 Wavelength = " + (299.792458/freq*0.951*0.50 *1000).toFixed(3) + " Millimetres";
        form.outputThree.value = "5/8 Wavelength = " + (299.792458/freq*0.951*0.62*1000).toFixed(3) + " Millimetres";
        form.outputFour.value = ".64 Wavelength = " + (299.792458/freq*0.951*0.64*1000).toFixed(3) + " Millimetres";
        form.outputFive.value = "Quad Loop = " + (306/freq).toFixed(3) + " Metres";
      break;
      case freq > 305:
        form.outputOne.value = "1/4 Wavelength = " + (299.792458/freq*0.951*0.25 *1000).toFixed(3) + " Millimetres";
        form.outputTwo.value = "1/2 Wavelength = " + (299.792458/freq*0.951*0.50 *1000).toFixed(3) + " Millimetres";
        form.outputThree.value = "5/8 Wavelength = " + (299.792458/freq*0.951*0.62*1000).toFixed(3) + " Millimetres";
        form.outputFour.value = ".64 Wavelength = " + (299.792458/freq*0.951*0.64*1000).toFixed(3) + " Millimetres";
        form.outputFive.value = "Quad Loop = " + (306/freq*1000).toFixed(3) + " Millimetres";
        break;
  }

}

$(document).keypress(function(e){
  if (e.which == 13){
      $("#calc-btn").click();
  }
});