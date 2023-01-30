module.exports = {
    /* 0,8 'NEW_MOON', // Nova
     * 1, 'WAXING_CRESCENT', // Crescente
     * 2, 'FIRST_QUARTER', // Quarto crescente // half moon
     * 3, 'WAXING_GIBBOUS', // Crescente gibosa
     * 4, 'FULL_MOON', // Cheia
     * 5, 'WANING_GIBBOUS', // Minguante gibosa
     * 6, 'THIRD_QUARTER', // Quarto minguante // half moon
     * 7, 'WANING_CRESCENT' // Minguante
     */
    moonPhase() {
        var moons = ['Lua Nova', 'Crescente', '4º Crescente', 'Cresc. Gibosa', 'Lua Cheia', 'Ming. Gibosa', '4º Minguante', 'Minguante'];
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth()+1;
        var day = d.getDate();
    
        var g, e;
    
        if (month == 1) --day;
        else if (month == 2) day += 30;
        else { // m >= 3
            day += 28 + (month-2)*3059/100;
            // adjust for leap years
            if (!(year & 3)) ++day;
            if ((year%100) == 0) --day;
        }
    
        g = (year-1900)%19 + 1;
        e = (11*g + 18) % 30;
        if ((e == 25 && g > 11) || e == 24) e++;
        var lua = ((((e + day)*6+11)%177)/22 & 7);

        switch (lua) {
            case 0:
            case 1:
            case 8: lua = 0; break;
            case 2:
            case 3: lua = 2; break;
            case 4:
            case 5: lua = 4; break;
            case 6:
            case 7: lua = 6; break;
        }
        
        return ('<span style="margin-right: 5px;">'+moons[lua]+'</span><img src="/images/moon/'+lua+'.png" alt="'+moons[lua]+'" height="30" style="vertical-align: bottom;">');
    }
}