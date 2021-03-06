$(document).ready(function() {
    $('#add-driver').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long'
                    },
                    // regexp: {
                    //     regexp: /^[a-zA-Z0-9_]+$/,
                    //     message: 'The username can only consist of alphabetical, number and underscore'
                    // }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    } 
                }
            },
            confPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and cannot be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
    });

    $('#login').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {            
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    } 
                }
            }            
        }
    });

    $('#add-category').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {            
            category: {
                validators: {
                    notEmpty: {
                        message: 'The category is required and cannot be empty'
                    },                    
                }
            }         
        }
    }); 

    $('#add-page').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {            
            title: {
                validators: {
                    notEmpty: {
                        message: 'The page title is required and cannot be empty'
                    },                    
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: 'The page name is required and cannot be empty'
                    },                    
                }
            }         
        }
    });

    $('#add-vehicle').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {            
            vehicle_id: {
                validators: {
                    notEmpty: {
                        message: 'Select car company'
                    },                    
                }
            },
            model_id: {
                validators: {
                    notEmpty: {
                        message: 'Select car model'
                    },                    
                }
            }
        }
    });

    $('#vehicle-detail').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {            
            vehicle_no: {
                validators: {
                    notEmpty: {
                        message: 'Enter vehicle number'
                    },                    
                }
            },
            vehicle_class_id: {
                validators: {
                    notEmpty: {
                        message: 'Select car class'
                    },                    
                }
            },
            insurance: {
                validators: {
                    notEmpty: {
                        message: 'Insurance required'
                    }, 
                }
            }
        }
    });
});