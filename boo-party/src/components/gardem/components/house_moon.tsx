import house from "../../../assets/img/house.svg"
import moon from "../../../assets/img/moon.svg"
import morcego_front from "../../../assets/img/morcego_front.svg"
import morcego_rotate_right from "../../../assets/img/morcego_rotate_right.svg"
import morcego_rotate_right2 from "../../../assets/img/morcego_rotate_right_2.svg"
import witch from "../../../assets/img/witch.svg"


export const HouseMoon = ()=>{
    return(
        <div className="relative w-full h-full">
            <div className="absolute w-full top-[-15%] right-[25%] shadow-moon bg-[#fbf6be] rounded-full z-[-1] tablet:-right-1/2 tablet:-translate-x-1/2 tablet:-top-1/4">
                <div className="relative w-full h-full">
                    <img src={moon} className="h-full w-full"/>
                    <img src={morcego_rotate_right} className="absolute top-0 right-full -translate-x-full translate-y-full min-w-[20px] w-[28px] tablet:w-[4vw] tablet:right-3/4" />
                    <img src={witch} className="absolute top-[40%] translate-x-1/2 w-[35px] min-w-[18px] tablet:w-[4.5vw]" />
                    <img src={morcego_rotate_right2} className="absolute top-[20%] right-[60%] min-w-[19px] w-[26px] tablet:w-[4vw]" />
                    <img src={morcego_front} className="absolute top-0 right-0 w-[26px] min-w-[20px] tablet:w-[4vw]" />
                </div>
            </div>
            <img src={house} className="h-full"/>
        </div>
    )
}