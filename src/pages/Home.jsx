
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import HeadLine from "../components/HeadLine"
import post01 from "../assets/images/post-01.jpg";
import post02 from "../assets/images/post-02.jpg";
import post03 from "../assets/images/post-03.jpg";
import post04 from "../assets/images/post-04.jpg";

export default function Home(){

    return(
        <>
            <TopBar />
            <HeadLine />

               <section className="bg0">
  <div className="container">
    <div className="row m-rl--1">

      {/* LEFT BIG BOX */}
      <div className="col-md-6 p-rl-1 p-b-2">
        
			 <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{
                  backgroundImage: `url(${post01})`, // use imported image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  
                }}
              >
          <a href="#" className="dis-block how1-child1 trans-03"></a>

          <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
            <a
              href="#"
              className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
            >
              Business
            </a>

            <h3 className="how1-child2 m-t-14 m-b-10">
              <a href="#" className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                Microsoft quisque at ipsum vel orci eleifend ultrices
              </a>
            </h3>

            <span className="how1-child2">
              <span className="f1-s-4 cl11">Jack Sims</span>
              <span className="f1-s-3 cl11 m-rl-3">-</span>
              <span className="f1-s-3 cl11">Feb 16</span>
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-md-6 p-rl-1">
        <div className="row m-rl--1">

          {/* TOP RIGHT IMAGE */}
          <div className="col-12 p-rl-1 p-b-2">
            <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{
                  backgroundImage: `url(${post02})`, // use imported image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "250px",
                }}
              >
              <a href="#" className="dis-block how1-child1 trans-03"></a>

              <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                  Culture
                </a>

                <h3 className="how1-child2 m-t-14">
                  <a href="#" className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
                    London ipsum dolor sit amet, consectetur adipiscing elit.
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="col-sm-6 p-rl-1 p-b-2">
            <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{
                  backgroundImage: `url(${post03})`, // use imported image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "188px",
                }}
              >
              <a href="#" className="dis-block how1-child1 trans-03"></a>

              <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                  Life Style
                </a>

                <h3 className="how1-child2 m-t-14">
                  <a href="#" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                    Pellentesque dui nibh, pellen-tesque ut dapibus ut
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="col-sm-6 p-rl-1 p-b-2">
        <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{
                  backgroundImage: `url(${post04})`, 
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "188px",
                }}
              >
              <a href="#" className="dis-block how1-child1 trans-03"></a>

              <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                  Sport
                </a>

                <h3 className="how1-child2 m-t-14">
                  <a href="#" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                    Motobike Vestibulum venenatis purus nec nibh volutpat
                  </a>
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
               </section>

                <section className="bg0 p-t-70">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-10 col-lg-8">
					<div className="p-b-20">
						
						<div className="tab01 p-b-20">
							<div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
								<h3 className="f1-m-2 cl12 tab01-title">
									Sports
								</h3>

								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tab1-1" role="tab">All</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab1-2" role="tab">Football</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab1-3" role="tab">Basketball</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab1-4" role="tab">Golf</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab1-5" role="tab">Tennis</a>
									</li>

									<li className="nav-item-more dropdown dis-none">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
											<i className="fa fa-ellipsis-h"></i>
										</a>

										<ul className="dropdown-menu">
											
										</ul>
									</li>
								</ul>

								<a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
									View all
									<i className="fs-12 m-l-5 fa fa-caret-right"></i>
								</a>
							</div>
								

							<div className="tab-content p-t-35">
								<div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-05.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															American live music lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-06.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-07.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Game
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-08.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Celebrity
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab1-2" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-09.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															American live music lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-08.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Celebrity
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-06.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-07.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Game
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab1-3" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-08.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															American live music lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-07.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Celebrity
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-06.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-05.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Game
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab1-4" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-06.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															American live music lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-09.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Celebrity
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-07.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-08.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Game
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab1-5" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-07.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															American live music lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-08.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Celebrity
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-06.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Music
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-09.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Game
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="tab01 p-b-20">
							<div className="tab01-head how2 how2-cl2 bocl12 flex-s-c m-r-10 m-r-0-sr991">
								<h3 className="f1-m-2 cl13 tab01-title">
									Vacancies
								</h3>

								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tab2-1" role="tab">All</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab2-2" role="tab">IT</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab2-3" role="tab">Accounting</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab2-4" role="tab">Human Resources</a>
									</li>

									<li className="nav-item-more dropdown dis-none">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
											<i className="fa fa-ellipsis-h"></i>
										</a>

										<ul className="dropdown-menu">
											
										</ul>
									</li>
								</ul>

										<a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
									View all
									<i className="fs-12 m-l-5 fa fa-caret-right"></i>
								</a>
							</div>
								

							<div className="tab-content p-t-35">
								<div className="tab-pane fade show active" id="tab2-1" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-10.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															Bitcoin lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Finance
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-11.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Small Business
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-12.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Economy
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-13.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Money & Markets
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab2-2" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-13.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															Bitcoin lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Finance
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-12.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Small Business
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-11.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Economy
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-10.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Money & Markets
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab2-3" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-11.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															Bitcoin lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Finance
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-12.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Small Business
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-13.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Economy
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-10.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Money & Markets
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab2-4" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-12.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															Bitcoin lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Finance
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-13.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Small Business
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-10.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Economy
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-11.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Money & Markets
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="tab01 p-b-20">
							<div className="tab01-head how2 how2-cl3 bocl12 flex-s-c m-r-10 m-r-0-sr991">
								<h3 className="f1-m-2 cl14 tab01-title">
									News
								</h3>

								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tab3-1" role="tab">All</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab3-2" role="tab">Political</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab3-3" role="tab">Entertaiment</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab3-4" role="tab">Finance</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab3-5" role="tab">International</a>
									</li>

									<li className="nav-item-more dropdown dis-none">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
											<i className="fa fa-ellipsis-h"></i>
										</a>

										<ul className="dropdown-menu">
											
										</ul>
									</li>
								</ul>

										<a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
									View all
									<i className="fs-12 m-l-5 fa fa-caret-right"></i>
								</a>
							</div>
								

							<div className="tab-content p-t-35">
								<div className="tab-pane fade show active" id="tab3-1" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-14.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															You wish lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Hotels
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-15.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Beachs
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-16.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Flight
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-17.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Culture
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab3-2" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-15.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															You wish lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Hotels
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-16.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Beachs
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-17.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Flight
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-18.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Culture
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab3-3" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-16.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															You wish lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Hotels
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-17.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Beachs
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-18.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Flight
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-14.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Culture
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab3-4" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-17.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															You wish lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Hotels
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-18.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Beachs
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-14.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Flight
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-15.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Culture
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab3-5" role="tabpanel">
									<div className="row">
										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="m-b-30">
												<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
													<img src="images/post-18.jpg"  alt="IMG" />
												</a>

												<div className="p-t-20">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
															You wish lorem ipsum dolor sit amet consectetur 
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
															Hotels
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 18
														</span>
													</span>
												</div>
											</div>
										</div>

										<div className="col-sm-6 p-r-25 p-r-15-sr991">
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-17.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Beachs
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 17
														</span>
													</span>
												</div>
											</div>
											
											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-16.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Flight
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 16
														</span>
													</span>
												</div>
											</div>

											<div className="flex-wr-sb-s m-b-30">
												<a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
													<img src="images/post-15.jpg"  alt="IMG" />
												</a>

												<div className="size-w-2">
													<h5 className="p-b-5">
														<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
															Donec metus orci, malesuada et lectus vitae
														</a>
													</h5>

													<span className="cl8">
														<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
															Culture
														</a>

														<span className="f1-s-3 m-rl-3">
															-
														</span>

														<span className="f1-s-3">
															Feb 12
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-10 col-lg-4">
					<div className="p-l-10 p-rl-0-sr991 p-b-20">
						<div>
							<div className="how2 how2-cl4 flex-s-c">
								<h3 className="f1-m-2 cl3 tab01-title">
									Most Popular
								</h3>
							</div>

							<ul className="p-t-35">
								<li className="flex-wr-sb-s p-b-22">
									<div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
										1
									</div>

									<a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
									</a>
								</li>

								<li className="flex-wr-sb-s p-b-22">
									<div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
										2
									</div>

									<a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
										Proin velit consectetur non neque
									</a>
								</li>

								<li className="flex-wr-sb-s p-b-22">
									<div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
										3
									</div>

									<a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
										Nunc vestibulum, enim vitae condimentum volutpat lobortis ante
									</a>
								</li>

								<li className="flex-wr-sb-s p-b-22">
									<div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
										4
									</div>

									<a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
										Proin velit justo consectetur non neque elementum
									</a>
								</li>

								<li className="flex-wr-sb-s p-b-22">
									<div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
										5
									</div>

									<a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
										Proin velit consectetur non neque
									</a>
								</li>
							</ul>
						</div>

						<div className="flex-c-s p-t-8">
							<a href="#">
								<img className="max-w-full" src="images/banner-02.jpg"  alt="IMG" />
							</a>
						</div>
						
						<div className="p-t-50">
							<div className="how2 how2-cl4 flex-s-c">
								<h3 className="f1-m-2 cl3 tab01-title">
									Stay Connected
								</h3>
							</div>

							<ul className="p-t-35">
								<li className="flex-wr-sb-c p-b-20">
									<a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0">
										<span className="fab fa-facebook-f"></span>
									</a>

									<div className="size-w-3 flex-wr-sb-c">
										<span className="f1-s-8 cl3 p-r-20">
											6879 Fans
										</span>

										<a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
											Like
										</a>
									</div>
								</li>

								<li className="flex-wr-sb-c p-b-20">
									<a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0">
										<span className="fab fa-twitter"></span>
									</a>

									<div className="size-w-3 flex-wr-sb-c">
										<span className="f1-s-8 cl3 p-r-20">
											568 Followers
										</span>

										<a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
											Follow
										</a>
									</div>
								</li>

								<li className="flex-wr-sb-c p-b-20">
									<a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0">
										<span className="fab fa-youtube"></span>
									</a>

									<div className="size-w-3 flex-wr-sb-c">
										<span className="f1-s-8 cl3 p-r-20">
											5039 Subscribers
										</span>

										<a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
											Subscribe
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	            </section>

                <div className="container">
                    <div className="flex-c-c">
                        <a href="#">
                            <img className="max-w-full" src="images/banner-01.jpg" alt="IMG" /> 
                        </a>
                    </div>
                </div>

                <section class="bg0 p-t-60 p-b-35">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-10 col-lg-8 p-b-20">
					<div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
						<h3 className="f1-m-2 cl3 tab01-title">
							Latest Articles
						</h3>
					</div>

					<div className="row p-t-35">
						<div className="col-sm-6 p-r-25 p-r-15-sr991">
							<div className="m-b-45">
								<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
									<img src="images/latest-01.jpg"  alt="IMG" />
								</a>

								<div className="p-t-16">
									<h5 className="p-b-5">
										<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
											You wish lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 18
										</span>
									</span>
								</div>
							</div>
						</div>

						<div className="col-sm-6 p-r-25 p-r-15-sr991">
							<div className="m-b-45">
								<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
									<img src="images/latest-02.jpg"  alt="IMG" />
								</a>

								<div className="p-t-16">
									<h5 className="p-b-5">
										<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
											You wish lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 16
										</span>
									</span>
								</div>
							</div>
						</div>

						<div className="col-sm-6 p-r-25 p-r-15-sr991">
							<div className="m-b-45">
								<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
									<img src="images/latest-03.jpg"  alt="IMG" />
								</a>

								<div className="p-t-16">
									<h5 className="p-b-5">
										<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
											You wish lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 15
										</span>
									</span>
								</div>
							</div>
						</div>

						<div className="col-sm-6 p-r-25 p-r-15-sr991">
							<div className="m-b-45">
								<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
									<img src="images/latest-04.jpg"  alt="IMG" />
								</a>

								<div className="p-t-16">
									<h5 className="p-b-5">
										<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
											You wish lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 13
										</span>
									</span>
								</div>
							</div>
						</div>

						<div className="col-sm-6 p-r-25 p-r-15-sr991">
							<div className="m-b-45">
								<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
									<img src="images/latest-05.jpg"  alt="IMG" />
								</a>

								<div className="p-t-16">
									<h5 className="p-b-5">
										<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
											You wish lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 10
										</span>
									</span>
								</div>
							</div>
						</div>

						<div className="col-sm-6 p-r-25 p-r-15-sr991">
							<div className="m-b-45">
								<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
									<img src="images/latest-06.jpg"  alt="IMG" />
								</a>

								<div className="p-t-16">
									<h5 className="p-b-5">
										<a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
											You wish lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 09
										</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-10 col-lg-4">
					<div className="p-l-10 p-rl-0-sr991 p-b-20">
						<div className="p-b-55">
							<div className="how2 how2-cl4 flex-s-c m-b-35">
								<h3 className="f1-m-2 cl3 tab01-title">
									Featured Video
								</h3>
							</div>

							<div>
								<div className="wrap-pic-w pos-relative">
									<img src="images/video-01.jpg"  alt="IMG" />

									<button className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-01">
										<span className="fab fa-youtube"></span>
									</button>
								</div>

								<div className="p-tb-16 p-rl-25 bg3">
									<h5 className="p-b-5">
										<a href="#" className="f1-m-3 cl0 hov-cl10 trans-03">
											Music lorem ipsum dolor sit amet consectetur 
										</a>
									</h5>

									<span className="cl15">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 18
										</span>
									</span>
								</div>
							</div>	
						</div>
							
						<div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-55">
							<h5 className="f1-m-5 cl0 p-b-10">
								Subscribe
							</h5>

							<p className="f1-s-1 cl0 p-b-25">
								Get all latest content delivered to your email a few times a month.
							</p>

							<form className="size-a-9 pos-relative">
								<input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email" />

								<button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
									<i className="fa fa-arrow-right"></i>
								</button>
							</form>
						</div>
						
						<div className="p-b-55">
							<div className="how2 how2-cl4 flex-s-c m-b-30">
								<h3 className="f1-m-2 cl3 tab01-title">
									Tags
								</h3>
							</div>

							<div className="flex-wr-s-s m-rl--5">
								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Fashion
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Lifestyle
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Denim
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Streetstyle
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Crafts
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Magazine
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									News
								</a>

								<a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									Blogs
								</a>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
            <Footer />
        
        </>
    )
}