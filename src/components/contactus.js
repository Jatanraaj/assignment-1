import React from "react";
function Contact(){
    return(
        <div><div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <h1 class="mb-3" id="prodhead">Contact Us</h1>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="your-name" class="form-label"></label>
                                <input type="text" class="form-control" id="your-name" name="your-name" placeholder="First Name" required />
                            </div>
                            <div class="col-md-6">
                                <label for="your-surname" class="form-label"></label>
                                <input type="text" class="form-control" id="your-surname" name="your-surname" placeholder="Last Name" required />
                            </div>
                            <div class="col-md-6">
                                <label for="your-email" class="form-label"></label>
                                <input type="email" class="form-control" id="your-email" name="your-email" placeholder=" Enter Your Email" required />
                            </div>
                            <div class="col-md-6">
                                <label for="your-subject" class="form-label"></label>
                                <input type="text" class="form-control" id="your-subject" name="your-subject" placeholder="Subject of your message"/>
                            </div>
                            <div class="col-12">
                                <label for="your-message" class="form-label"></label>
                                <textarea class="form-control" id="your-message" name="your-message" rows="5" placeholder="Enter Your Valueable Words Here" required></textarea>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button data-res="<?php echo $sum; ?>" type="submit" class="btn btn-dark w-100 fw-bold butcont">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div></div>
    )
}
export default Contact;