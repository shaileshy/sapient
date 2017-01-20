/**
 * Created by Manoj on 1/18/2017.
 */
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstName: "required",
            password1: {
                required: true,
                minlength: 6
            },
            confirmpassword1:{
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },

        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password1: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirmpassword1:{
                required:"Please provide same password",
                minlength:"Your password must be at least 6 characters long"
            },
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});
