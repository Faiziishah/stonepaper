let player_score=0;
let computr_score =0;
let choises = document.querySelectorAll(".choice");
let msg = document.getElementById("showmsg")
let ai_img = document.getElementById("AI_choise")
let points_tabel = document.querySelectorAll("point_tabel")
let users_points = document.getElementById("user")
let computer_points = document.getElementById("AI")
let user_score = 0;
let AI_score =0;

const aichoice= ()=>{

    const choice =["stone","paper","sizer"]
   let index =  Math.floor(Math.random()*3);
   return choice[index];
 }

 const game = ( com_choice)=>{
    msg.textContent= "`game was Draw! leveled with AI ";
    msg.style.backgroundColor ="red"
    msg.style.color=" white"
    ai_img.src= `./choice_${com_choice}.png` 
    

}



start_game = ((player_choice)=>{
    console.log( " you clicked ",player_choice)
     const com_choice = aichoice()
   ;  console.log(" computer clicked ==",com_choice )

if (player_choice ===com_choice){
    game(com_choice,player_choice);
}
 else {
   let   user_win = true;
     
     if(
        player_choice==="stone"
        
            ){
                user_win = com_choice=="paper"?false:true;
            }
            else if( player_choice==="paper"){ user_win = com_choice ==="sizer"?false: true;
              

            }
            else{
              user_win =  com_choice==="rock"?false:true;
            }
        
show_winner(user_win,com_choice,player_choice)
 }


     })


     const show_winner = (user_win,com_choice,)=>{

        if ( user_win === true){


            user_score++;
            // if(user_points){

            users_points.innerText = user_score;
        
        console.log (user_score,"%",users_points)

            msg.textContent=  "you won the match you beates A1  ";
             msg.style.backgroundColor ="green";
    msg.style.color=" white";
    ai_img.src= `./choice_${com_choice}.png` 
   
        }
        else{

   AI_score++;
//    if(computer_points){

   
    computer_points.innerText= AI_score;

console.log(AI_score,"&",computer_points)


            msg.textContent = "OPS' AI wins! you lose from AI"
            ai_img.src= `./choice_${com_choice}.png` 

             msg.style.backgroundColor =" blue"
    msg.style.color=" white"
    

     

        }
     }
    
    
    



     choises.forEach((choice) => {
        choice.addEventListener("click",()=>{
        
        const player_choice= choice.getAttribute("id")
        
        start_game(player_choice);
      
        
        
        })
        })
        
   