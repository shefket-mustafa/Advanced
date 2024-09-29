function constrCrew(worker){
    
    if(worker.dizziness){
        worker.levelOfHydrated +=0.1 * worker.experience * worker.weight;
        
        worker.dizziness=false;
    }
    return worker;
}
constrCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });