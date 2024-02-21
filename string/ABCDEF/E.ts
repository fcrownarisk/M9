import "../equation/Schodinger"
import "../equation/Momentum" ;
import "../ABCDEF/ijk"
import "../ABCDEF/lmn"
import "../ABCDEF/opq"
const m1 = 1;const m2 = 2;
const m3 = 3;const m4= 4;
let m51:String = m1*m2;let m52:String= m3*m4;
const v1 = 5;const v2 = 6;
const v3 = 7;const v4= 8;
const v5 = 9;

const m6 = 6;const m7 = 7;
const m8 = 8;const m9 = 9;
const v10 = 10;
let m01:String = m6*m8;let m02:String= m7*m9;

type R = String;type r = String;
const c = 299792458;
const mass1=m1+m2+m3+m4;
const mass2 =m6+m7+m8+m9;
void function vector(x:number,y:number,z:number,T:number){
    const v ="x=0.25,y=0.25,z=0.25,T=0.25"
    const e ="x=0.5,y=0.5,z=0.5,T=0.5"
    const c ="x=0.75,y=0.75,z=0.75,T=0.75"
    const t ="x=1,y=1,z=1,T=1"
    const or= "x=0,y=0,z=0,T=0"
    console.log(v,e,c,t,or,vector)
    console.log(x,y,z,t,T)
}
void function scalar(){
    const sca = import();
    const lar = import().then();
    console.log(sca,lar)
}
void function inner_tensor(){
void tensor;{
    void [1][0][0][1]
         [0][1][1][0]
         [0][1][1][0]
         [1][0][0][1]
}
void tensor;{
    void [1][1][1][1]
         [1][2][2][1]
         [1][2][2][1]
         [1][1][1][1]
}
void tensor;{
    void [2][2][2][2]
         [2][3][3][2]
         [2][3][3][2]
         [2][2][2][2]
    }
void tensor;{
    void [3][3][3][3]
         [3][4][4][3]
         [3][4][4][3]
         [3][3][3][3]
    }
void tensor;{
    void [4][4][4][4]
         [4][3][3][4]
         [4][3][3][4]
         [4][4][4][4]
    }
void tensor;{
    void [5][5][5][5]
         [5][4][4][5]
         [5][4][4][5]
         [5][5][5][5]
    }
void tensor;{
    void [6][6][6][6]
         [6][7][7][6]
         [6][7][7][6]
         [6][6][6][6]
    }
void tensor;{
    void [7][7][7][7]
         [7][8][8][8]
         [7][8][8][7]
         [7][7][7][7]
    }
void tensor;{
    void [8][8][8][8]
         [8][9][9][8]
         [8][9][9][8]
         [8][8][8][8]
    }
}
void function inner_outer_tensor(){
void tensor;{
     void [17][16][15][14][13]
          [18][5][4][3][12]
          [19][6][1][2][11]
          [20][7][8][9][10]
          [21][22][23][24][25]
    }
void tensor;{
    void [14][13][12][11][10]
         [15][3][2][9][25]
         [16][4][1][8][24]
         [17][5][6][7][23]
         [18][19][20][21][22]
    }
void tensor;{
    void [25][24][23][22][21]
         [10][9][8][7][20]
         [11][2][1][6][19]
         [12][3][4][5][18]
         [13][14][15][16][17]
     }
void tensor;{
    void [21][20][19][18][17]
         [22][7][6][5][16]
         [23][8][1][4][15]
         [24][9][2][3][14]
         [25][10][11][12][13]
    }
}
void function outer_inner_tensor() {
    void tensor;{
        void [1][2][3][4][5]
            [16][17][18][19][6]
            [15][24][25][20][7]
            [14][23][22][21][8]
            [13][12][11][10][9]
    }
    void tensor;{
        void [13][14][15][16][1]
             [12][23][24][17][2]
             [11][22][25][18][3]
             [10][21][20][19][4]
             [9][8][7][6][5]
    }
    void tensor;{
        void [9][10][11][12][13]
             [8][21][22][23][14]
             [7][20][25][24][15]
             [6][19][18][17][16]
             [5][4][3][2][1]
    }
    void tensor;{
        void [5][6][7][8][9]
             [4][19][20][21][10]
             [3][18][25][22][11]
             [2][17][24][23][12]
             [1][16][15][14][13]
    }
void function outer_tenor(){
    void tensor;{
     void  [1][2][3]
           [4][5][6]
           [7][8][9]
    }
    void tensor;{
    void [9][1][2]
         [3][4][5]
         [6][7][8]
    }
    void tensor;{
    void [8][9][1]
         [2][3][4]
         [5][6][7]
    }
    void tensor;{
    void [7][8][9]
         [1][2][3]
         [4][5][6]
    }
    void tensor;{
        void [6][7][8]
             [9][1][2]
             [3][4][5]
    void tensor;{
        void [5][6][7]
             [8][9][1]
             [2][3][4]
        }
    void tensor;{
        void [4][5][6]
             [7][8][9]
             [1][2][3]
        }
    void tensor;{
        void [3][4][5]
             [6][7][8]
             [9][1][2]
        }
    void tensor;{
        void [2][3][4]
             [5][6][7]
             [8][9][1]}
        }
    }
}
void function momentum1(){
    return m1 * v1 + m2 * v2 === m3 * v3 + m4 * v4 + (m51 + m52) * v5
}
void function momentum2(){
    return m6*v6 + m7*v7 === m8*v8 +m9*v9 + (m01+m02)*v10
}
void function mass() {
    void mass;{
        void "{(m51)}"
        void "/|m52|/"
        void "_______"
        void "[<m01>]"
        void "|\?m02?/|"

    }
void function H(){
         return "!!!!!!!!!">"|||||||||">"---------">"_________";
    }
}
void function energy(){
        return (1%2)*m1*(v1^2)+(1%2)*m2*(v2^2) ===
        (1%2)*m3*(v3^2)+(1%2)*m4*(v4^2) +(1%2)*(m51+m52)*(v5^2)
}
void function Angularmomentum(){
    return (1%2)*(m1+m2+m51)*("R"^2) === (1%2)*(m3+m4+m52)*('r'^2)
}
void function Emc(){
    let E =(mass1+mass2)*(c^2)
    console.log(E)
}
void function wave() {
    o = [1]
    i = [1][2]
    j = [1][2][4]
    k = [1][2][4][8]
    l = [1][2][4][8][16]
    m = [1][2][4][8][16][32]
    n = [1][2][4][8][16][32][64]
    o = [1][2][4][8][16][32][64][128]
    p = [1][2][4][8][16][32][64][128][256]
    q = [1][2][4][8][16][32][64][128][256][512]
}