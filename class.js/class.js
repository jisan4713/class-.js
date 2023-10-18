//section

var array_one= [12,24,31,64,52,76,34534];
console.log(array_one.indexOf(52));

console.log(array_one);

console.log(array_one[5]);

console.log(array_one.length);

// soluition no 01//

var toghether_age = 80;
var guess_dauther_age = 1;
var guess_father_age = 4;
var toghether_guess_age = guess_dauther_age+guess_father_age;

var dauther_age = toghether_age/toghether_guess_age;
var father_age = dauther_age*guess_father_age;

console.log(dauther_age);
console.log(father_age);


//solution no 02//

var main_input = 475;
var percent = 14;
var percent_value = percent/100;

var result = main_input*percent_value;

console.log(result);


//solution no 03//

var total_tk_together = 7532;
var main_have_extra = 560;

var rina_have =(total_tk_together-main_have_extra)/2;
var mina_have = rina_have+main_have_extra;

console.log('Rina will get'+ rina_have+ 'tk');
console.log('mina will get'+ mina_have+'tk');


//solution no 04//

var total_have = 3000;
var per_kg_prawn = 480;
var pet_kg_shing = 550;
var need_prawn_kg = 3;
var need_shing_kg = 2;

var total_costof_prawn =per_kg_prawn*need_prawn_kg;
var total_costof_shing =pet_kg_shing*need_shing_kg;

var total_bill = total_costof_prawn+total_costof_shing;
var total_return =total_have-total_bill;

console.log(total_return);

//solution no 05//

var ps_off_egg = 8;
var cost_egg = 72;
var per_egg_cost = cost_egg/ps_off_egg;

var buying_egg_ps = 15;
var buying_egg_cost = per_egg_cost*buying_egg_ps;

console.log(buying_egg_cost);