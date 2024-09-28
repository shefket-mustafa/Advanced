function roadRadar(number,string){
        let status='';

    switch(string){
        case 'city':
            if(number>50){
                let difference=number-50;
                if(difference<=20){
                    status+='speeding';
                } else if(difference>20 && difference<=40){
                    status+='excessive speeding';
                } else if(difference>40){
                    status+='reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            } else {
                console.log(`Driving ${number} km/h in a 50 zone`);
            }
            break;

            case 'interstate':
                if(number>90){
                    let difference=number-90;
                    if(difference<=20){
                        status+='speeding';
                    } else if(difference>20 && difference<=40){
                        status+='excessive speeding';
                    } else if(difference>40){
                        status+='reckless driving';
                    }
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
                } else {
                    console.log(`Driving ${number} km/h in a 90 zone`);
                }
                break;

                case 'motorway':
                    if(number>130){
                        let difference=number-130;
                        if(difference<=20){
                            status+='speeding';
                        } else if(difference>20 && difference<=40){
                            status+='excessive speeding';
                        } else if(difference>40){
                            status+='reckless driving';
                        }
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
                    } else {
                        console.log(`Driving ${number} km/h in a 130 zone`);
                    }
                    break;

                    case 'residential':
                    if(number>20){
                        let difference=number-20;
                        if(difference<=20){
                            status+='speeding';
                        } else if(difference>20 && difference<=40){
                            status+='excessive speeding';
                        } else if(difference>40){
                            status+='reckless driving';
                        }
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
                    } else {
                        console.log(`Driving ${number} km/h in a 20 zone`);
                    }
                    break;
    }

}
roadRadar(21,'residential');