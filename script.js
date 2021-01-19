var Names = ["The_Family_Book","Father","Mother","Uncle"]

var Images = ["https://languageduringmealtime.com/wp-content/uploads/2014/11/The-family-book-e1417314391978.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F2441744%2Fcartoon_child_dad_family_father_man_son_icon&psig=AOvVaw0r_twVcV7Dp8eXuLg_2I3K&ust=1610769589788000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi_uryGne4CFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2H7K9Z5i8G6H7G6_mother-cartoon-clip-art-animated-mom-png%2F&psig=AOvVaw3LobG_jx3n6T_JjikhUbTo&ust=1610769621993000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiim82Gne4CFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FmRJbTT_uncle-bob-cartoon-hd-png-download%2F&psig=AOvVaw2DW7aT57NiQ3NckvguHG7l&ust=1610769643671000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCLxteGne4CFQAAAAAdAAAAABAD"]

function ImageChanger() {

    var source = "";

    var helpingnames = "";

    for(i=0;i<Images.length;i++){
        source = Images[i];
        document.getElementById("Book").src = source;
        
}

    for(i=0;i<Names.length;i++){
        helpingnames = Names[i];
        document.getElementById("Names").innerHTML = helpingnames;
    }
}