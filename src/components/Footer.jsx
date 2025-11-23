import '../css/main.css'
import '../css/util.css'
import '../css/util.min.css'
import '../fonts/fontawesome-5.0.8/css/fontawesome-all.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'



export default function Footer(){
    return(
        <>
	<footer>
		<div className="bg2 p-t-40 p-b-25">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 p-b-20">
						<div className="size-h-3 flex-s-c">
							<a href="index.html">
								<img className="max-s-full" src="images/icons/logo-02.png" alt="LOGO" />
							</a>
						</div>

						<div>
							<p className="f1-s-1 cl11 p-b-16">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio
							</p>

							<p className="f1-s-1 cl11 p-b-16">
								Any questions? Call us on (+1) 96 716 6879
							</p>

							<div className="p-t-15">
								<a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
									<span className="fab fa-facebook-f"></span>
								</a>

								<a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
									<span className="fab fa-twitter"></span>
								</a>

								<a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
									<span className="fab fa-pinterest-p"></span>
								</a>

								<a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
									<span className="fab fa-vimeo-v"></span>
								</a>

								<a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
									<span className="fab fa-youtube"></span>
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-lg-4 p-b-20">
						<div className="size-h-3 flex-s-c">
							<h5 className="f1-m-7 cl0">
								Popular Posts
							</h5>
						</div>

						<ul>
							<li className="flex-wr-sb-s p-b-20">
								<a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
									<img src="images/popular-post-01.jpg" alt="IMG" />
								</a>

								<div className="size-w-5">
									<h6 className="p-b-5">
										<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
											Donec metus orci, malesuada et lectus vitae
										</a>
									</h6>

									<span className="f1-s-3 cl6">
										Feb 17
									</span>
								</div>
							</li>

							<li className="flex-wr-sb-s p-b-20">
								<a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
									<img src="images/popular-post-02.jpg" alt="IMG" />
								</a>

								<div className="size-w-5">
									<h6 className="p-b-5">
										<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
											Lorem ipsum dolor sit amet, consectetur
										</a>
									</h6>

									<span className="f1-s-3 cl6">
										Feb 16
									</span>
								</div>
							</li>

							<li className="flex-wr-sb-s p-b-20">
								<a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
									<img src="images/popular-post-03.jpg" alt="IMG" />
								</a>

								<div className="size-w-5">
									<h6 className="p-b-5">
										<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
											Suspendisse dictum enim quis imperdiet auctor
										</a>
									</h6>

									<span className="f1-s-3 cl6">
										Feb 15
									</span>
								</div>
							</li>
						</ul>
					</div>

					<div className="col-sm-6 col-lg-4 p-b-20">
						<div className="size-h-3 flex-s-c">
							<h5 className="f1-m-7 cl0">
								Category
							</h5>
						</div>

						<ul className="m-t--12">
							<li className="how-bor1 p-rl-5 p-tb-10">
								<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
									Fashion (22)
								</a>
							</li>

							<li className="how-bor1 p-rl-5 p-tb-10">
								<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
									Technology (29)
								</a>
							</li>

							<li className="how-bor1 p-rl-5 p-tb-10">
								<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
									Street Style (15)
								</a>
							</li>

							<li className="how-bor1 p-rl-5 p-tb-10">
								<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
									Life Style (28)
								</a>
							</li>

							<li className="how-bor1 p-rl-5 p-tb-10">
								<a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
									DIY & Crafts (16)
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="bg11">
			<div className="container size-h-4 flex-c-c p-tb-15">
				<span className="f1-s-1 cl0 txt-center">
					{/* Copyright © 2025<a href="#" className="f1-s-1 cl10 hov-link1" >Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib </a> */}
				</span>
			</div>
		</div>
	</footer>

	<div className="btn-back-to-top" id="myBtn">
		<span className="symbol-btn-back-to-top">
			<span className="fas fa-angle-up"></span>
		</span>
	</div>

	<div className="modal fade" id="modal-video-01" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document" data-dismiss="modal">
			<div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">&times;</div>

			<div className="wrap-video-mo-01">
				<div className="video-mo-01">
					<iframe src="https://www.youtube.com/embed/wJnBTPUQS5A?rel=0" allowFullScreen></iframe>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}