import '../css/main.css'
import '../css/util.css'
import '../css/util.min.css'
import '../fonts/fontawesome-5.0.8/css/fontawesome-all.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'
import '../vendor/animate/animate.css'
import '../vendor/css-hamburgers/hamburgers.min.css'
import '../vendor/animsition/css/animsition.min.css'


export default function TopBar(){
    return(
        <>
    <header>
		<div className="container-menu-desktop">
            <div className="row justify-content-center">
			<div className="topbar">
				<div className="content-topbar container h-100">
					<div className="left-topbar">
						<span className="left-topbar-item flex-wr-s-c">
							<span>
								New York, NY
							</span>

							<img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />

							<span>
								HI 58° LO 56°
							</span>
						</span>

						<a href="#" className="left-topbar-item">
							About
						</a>

						<a href="#" className="left-topbar-item">
							Contact
						</a>

						<a href="#" className="left-topbar-item">
							Sing up
						</a>

						<a href="/login" className="left-topbar-item">
							Log in
						</a>
					</div>

					<div className="right-topbar">
						<a href="#">
							<span className="fab fa-facebook-f"></span>
						</a>

						<a href="#">
							<span className="fab fa-twitter"></span>
						</a>

						<a href="#">
							<span className="fab fa-pinterest-p"></span>
						</a>

						<a href="#">
							<span className="fab fa-vimeo-v"></span>
						</a>

						<a href="#">
							<span className="fab fa-youtube"></span>
						</a>
					</div>
				</div>
			</div>

			<div className="wrap-header-mobile">
				<div className="logo-mobile">
					<a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
				</div>

				<div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</div>
			</div>

			<div className="menu-mobile">
				<ul className="topbar-mobile">
					<li className="left-topbar">
						<span className="left-topbar-item flex-wr-s-c">
							<span>
								New York, NY
							</span>

							<img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />

							<span>
								HI 58° LO 56°
							</span>
						</span>
					</li>

					<li className="left-topbar">
						<a href="#" className="left-topbar-item">
							About
						</a>

						<a href="#" className="left-topbar-item">
							Contact
						</a>

						<a href="#" className="left-topbar-item">
							Sing up
						</a>

						<a href="/login" className="left-topbar-item">
							Log in
						</a>
					</li>

					<li className="right-topbar">
						<a href="#">
							<span className="fab fa-facebook-f"></span>
						</a>

						<a href="#">
							<span className="fab fa-twitter"></span>
						</a>

						<a href="#">
							<span className="fab fa-pinterest-p"></span>
						</a>

						<a href="#">
							<span className="fab fa-vimeo-v"></span>
						</a>

						<a href="#">
							<span className="fab fa-youtube"></span>
						</a>
					</li>
				</ul>

				<ul className="main-menu-m">
					<li>
						<a href="index.html">Home</a>
						<ul className="sub-menu-m">
							<li><a href="/">Homepage v1</a></li>
							
						</ul>

						<span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
					</li>

					<li>
						<a href="category-00.html">Sports</a>
					</li>

					<li>
						<a href="category-01.html">Vacancies</a>
					</li>

					<li>
						<a href="category-02.html">Entertainment </a>
					</li>

					<li>
						<a href="category-01.html">Business</a>
					</li>

					<li>
						<a href="category-02.html">Travel</a>
					</li>

					<li>
						<a href="category-01.html">Life Style</a>
					</li>


					<li>
						<a href="#">Features</a>
						<ul className="sub-menu-m">
							<li><a href="category-01.html">Category Page v1</a></li>
							<li><a href="category-02.html">Category Page v2</a></li>
							<li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
							<li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
							<li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
							<li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
							<li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
							<li><a href="about.html">About Us</a></li>
							<li><a href="contact.html">Contact Us</a></li>
						</ul>

						<span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
					</li>
				</ul>
			</div>
			
            <div className='row justify-content-center'>
			<div className="wrap-logo container">
				<div className="logo">
					<a href="index.html"><img src="images/icons/logo-01.png" alt="LOGO" /></a>
				</div>	

				<div className="banner-header">
					<a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"><img src="images/banner-01.jpg" alt="IMG" /></a>
				</div>
			</div>	
			
			<div className="wrap-main-nav">
				<div className="main-nav">
					<nav className="menu-desktop">
						<a className="logo-stick" href="index.html">
							<img src="images/icons/logo-01.png" alt="LOGO" />
						</a>

						<ul className="main-menu">
							<li className="main-menu-active">
								<a href="index.html">Home</a>
								
							</li>

							<li className="mega-menu-item">
								<a href="category-01.html">Sports</a>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
										<a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
										<a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
										<a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
										<a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="news-0" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-05.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-10.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
															<h5 className="p-b-5">
																<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span className="cl8">
																<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
																	Finance
																</a>

																<span className="f1-s-3 m-rl-3">
																	-
																</span>

																<span className="f1-s-3">
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-14.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
															<h5 className="p-b-5">
																<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span className="cl8">
																<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
																	Beach
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

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-36.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
															<h5 className="p-b-5">
																<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span className="cl8">
																<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
																	Technology
																</a>

																<span className="f1-s-3 m-rl-3">
																	-
																</span>

																<span className="f1-s-3">
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="news-1" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-50.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-08.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-07.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-06.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
															<h5 className="p-b-5">
																<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span className="cl8">
																<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
																	Vacancies
																</a>

																<span className="f1-s-3 m-rl-3">
																	-
																</span>

																<span className="f1-s-3">
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="news-2" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-21.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-24.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-22.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-23.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="news-3" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-25.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-27.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-26.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-34.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="news-4" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-35.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-36.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-37.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-38.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="news-5" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-39.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-41.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-42.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-40.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
							</li>

							<li className="mega-menu-item">
								<a href="category-02.html">Vacancies </a>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
										<a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
										<a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
										<a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
										<a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="enter-1" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-25.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-27.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-26.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-34.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="enter-2" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-35.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-36.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-37.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-38.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane" id="enter-3" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-39.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-41.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-42.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-40.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
							</li>

							<li className="mega-menu-item">
								<a href="category-01.html">News & Entertaiment</a>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
										<a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
										<a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
										<a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
										<a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="business-1" role="tabpanel">
											<div className="row">
												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-10.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-11.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-26.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div className="col-3">
													<div>
														<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
															<img src="images/post-34.jpg" alt="IMG" />
														</a>

														<div className="p-t-10">
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
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</li>

							

							

					

							
						</ul>
					</nav>
				</div>
			</div>	
            </div>
            </div>
		</div>
	</header>
        </>
    )
}