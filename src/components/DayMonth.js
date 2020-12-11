
function DayMonth({day}){
    
        let diaFull = new Date(day);

        const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
             "Jul", "Ago", "Set", "Out", "Nov", "Dez"
                ];
        
        let dia = diaFull.getDate()
        let mes = monthNames[diaFull.getMonth()]

        if(dia < 10) {
            dia = `0${dia.toString()}`
        }

        
        return `${dia} ${mes}`
    
}

export default DayMonth
