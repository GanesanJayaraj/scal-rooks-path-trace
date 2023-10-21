console.log("Welcome");

let board = document.querySelector(".board");
let rows = document.querySelectorAll(".row");
let checkbox = document.querySelectorAll(".checkbox");

console.log(board);
console.log(rows);
console.log(checkbox);

rows.forEach((row)=>{
    row.addEventListener("click" , (e) => {
        resetChess();
        console.log(row?.id , e?.target?.id%rows?.length);
        paintRows(parseInt(row?.id) , e?.target?.id%rows?.length);
        paintCols(parseInt(row?.id) , e?.target?.id%rows?.length);
    });
});


function paintRows(row , col) {
    row = row == 8 ? 1 : row;
    col = col == 0 ? 8 : col;
    for(let i=0;i<=rows?.length;i++) {
        for(let j=0;j<=rows[row]?.children?.length;j++) {
            // checkbox[row+(col*row.length)].style.color = "red";
            if ( rows[ i ] && rows[i].children[col-1]) {
                rows[i].children[col-1].style.backgroundColor = "red";
            }
        }
    }
}

function paintCols(row , col) {
    row = row == 8 ? 8 : row;
    col = col == 0 ? 8 : col;
    for(let i=0;i<=rows?.length;i++) {
        if(row == 8) {
            for(let j=0;j<=rows[7]?.children?.length;j++) {
                // checkbox[row+(col*row.length)].style.color = "red";
                // if ( rows[ row ] && rows[row].children[j]) {
                    if(row == 8) {
                        if(rows[7]?.children[j]) {
                            rows[7].children[j].style.backgroundColor = "red";
                        }
    
                    } else {
    
                        rows[row - 1].children[j].style.backgroundColor = "red";
                    }
                // }
            }
        }
        for(let j=0;j<=rows[row]?.children?.length;j++) {
            // checkbox[row+(col*row.length)].style.color = "red";
            // if ( rows[ row ] && rows[row].children[j]) {
                if(row == 8) {
                rows[7].children[j].style.backgroundColor = "red";

                } else {
                    if(rows[row - 1].children[j]) {

                        rows[row - 1].children[j].style.backgroundColor = "red";
                    }
                }
            // }
        }
    }
}

let chessBoard = []

rows.forEach( ( row ) => {
    chessBoard.push(Array.from(row.children));
});

console.log(chessBoard)
let boa = []

function resetChess() {
    for(let i=0;i<rows?.length;i++) {
        for(let j=0;j<rows[0]?.children?.length;j++) {
            if((i+j)%2 == 0) {
                rows[i].children[j].style.backgroundColor = "black";
            } else {
                rows[i].children[j].style.backgroundColor = "white";
            }
        }
    }
}
