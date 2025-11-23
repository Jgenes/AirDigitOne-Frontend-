import '../css/main.css'
import '../css/util.css'
import '../css/util.min.css'
import '../fonts/fontawesome-5.0.8/css/fontawesome-all.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'


export default function HeadLine(){
    return(
        <>
                <div className="container">
  <div className="row justify-content-center">
    <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8 d-flex align-items-center">

      {/* LEFT TEXT */}
      <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
        <span className="text-uppercase cl2 p-r-8 mt-4">
          Trending Now:
        </span>

        <span
          className="dis-inline-block cl6 slide100-txt pos-relative size-w-0"
          data-in="fadeInDown"
          data-out="fadeOutDown"
        >
          <span className="dis-inline-block slide100-txt-item animated visible-false">
            Interest rate angst trips up US equity bull market
          </span>
          <span className="dis-inline-block slide100-txt-item animated visible-false">
            Designer fashion show kicks off Variety Week
          </span>
          <span className="dis-inline-block slide100-txt-item animated visible-false">
            Microsoft quisque at ipsum vel orci eleifend ultrices
          </span>
        </span>
      </div>

      {/* SEARCH BAR ON RIGHT */}
      <div
        className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6 ms-auto"
        style={{
          backgroundColor: "white",
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          paddingRight: "10px",
        }}
      >
        <input
          className="f1-s-1 cl6 plh9 s-full p-l-25"
          type="text"
          name="search"
          placeholder="Search"
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "100%",
          }}
        />

        <button
          className="flex-c-c size-a-1 fs-20 cl2 hov-cl10 trans-03"
          style={{ background: "transparent", border: "none" }}
        >
          <i className="zmdi zmdi-search"></i>
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}