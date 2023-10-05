function frequency(form){
  
  let freq = form.get_freq.value;
  const speedOfLight = 299.792458;
  const quadLoop = 306/freq;
  const millimetresQuarterWave = speedOfLight/freq*0.951*0.25 *1000;
  const millimetresHalfWave = speedOfLight/freq*0.951*0.50 *1000;
  const millimetresFiveEighthWave = speedOfLight/freq*0.951*0.62*1000;
  const millimetresPoint64Wave = speedOfLight/freq*0.951*0.64*1000;
  
   const metresQuarterWave = speedOfLight/freq*0.951*0.25;
  const metresHalfWave = speedOfLight/freq*0.951*0.50;
  const metresFiveEighthWave = speedOfLight/freq*0.951*0.62;
  const metresPoint64Wave = speedOfLight/freq*0.951*0.64;
  
  const mm = " Millimetres";
  const m = " Metres";
  
  switch(true) {
      case freq >= 142.5513 && freq <= 176.8:
        form.outputOne.value = "1/4 Wavelength = " + (millimetresQuarterWave).toFixed(3) + mm;
        form.outputTwo.value = "1/2 Wavelength = " + (millimetresHalfWave).toFixed(3) + mm;
        form.outputThree.value = "5/8 Wavelength = " + (metresFiveEighthWave).toFixed(3) + m;
        form.outputFour.value = ".64 Wavelength = " + (metresPoint64Wave).toFixed(3) + m;
        form.outputFive.value = "Quad Loop = " + (quadLoop).toFixed(3) + " Metres";
        break;
      case freq >= 71.3 && freq <= 142.5513:
        form.outputOne.value = "1/4 Wavelength = " + (millimetresQuarterWave).toFixed(3) + mm;
        form.outputTwo.value = "1/2 Wavelength = " + (metresHalfWave).toFixed(3) + m;
        form.outputThree.value = "5/8 Wavelength = " + (metresFiveEighthWave).toFixed(3) + m;
        form.outputFour.value = ".64 Wavelength = " + (metresPoint64Wave).toFixed(3) + m;
        form.outputFive.value = "Quad Loop = " + (quadLoop).toFixed(3) + " Metres";
      break;
      case freq <= 71.3: 
        form.outputOne.value = "1/4 Wavelength = " + (metresQuarterWave).toFixed(3) + m;
        form.outputTwo.value = "1/2 Wavelength = " + (metresHalfWave).toFixed(3) + m;
        form.outputThree.value = "5/8 Wavelength = " + (metresFiveEighthWave).toFixed(3) + m;
        form.outputFour.value = ".64 Wavelength = " + (metresPoint64Wave).toFixed(3) + m;
        form.outputFive.value = "Quad Loop = " + (quadLoop).toFixed(3) + " Metres";
      break;
      case freq >= 177 && freq <= 182.4:
        form.outputOne.value = "1/4 Wavelength = " + (millimetresQuarterWave).toFixed(3) + mm;
        form.outputTwo.value = "1/2 Wavelength = " + (millimetresHalfWave).toFixed(3) + mm;
        form.outputThree.value = "5/8 Wavelength = " + (millimetresFiveEighthWave).toFixed(3) + mm;
        form.outputFour.value = ".64 Wavelength = " + (metresPoint64Wave).toFixed(3) + m;
        form.outputFive.value = "Quad Loop = " + (quadLoop).toFixed(3) + " Metres";
      break;
      case freq >= 182 && freq <= 305:
        form.outputOne.value = "1/4 Wavelength = " + (millimetresQuarterWave).toFixed(3) + mm;
        form.outputTwo.value = "1/2 Wavelength = " + (millimetresHalfWave).toFixed(3) + mm;
        form.outputThree.value = "5/8 Wavelength = " + (millimetresFiveEighthWave).toFixed(3) + mm;
        form.outputFour.value = ".64 Wavelength = " + (millimetresPoint64Wave).toFixed(3) + mm;
        form.outputFive.value = "Quad Loop = " + (quadLoop).toFixed(3) + " Metres";
      break;
      case freq > 305:
        form.outputOne.value = "1/4 Wavelength = " + (millimetresQuarterWave).toFixed(3) + mm;
        form.outputTwo.value = "1/2 Wavelength = " + (millimetresHalfWave).toFixed(3) + mm;
        form.outputThree.value = "5/8 Wavelength = " + (millimetresFiveEighthWave).toFixed(3) + mm;
        form.outputFour.value = ".64 Wavelength = " + ( millimetresPoint64Wave).toFixed(3) + mm;
        form.outputFive.value = "Quad Loop = " + (quadLoop*1000).toFixed(3) + mm;
        break;
  }

}

$(document).keypress(function(e){
  if (e.which == 13){
      $("#calc-btn").click();
  }
});
