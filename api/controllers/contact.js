const Contact = require('../models/Contact')

const getAllContactController = (req,res,next) => {
    Contact.find()
        .then(contacts => {
            res.status(200).json({
                message: 'All ConAdded',
                contacts
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error',
                error: err
            })
            
        })
 }


 const postNewContactController = (req,res,next) =>{

    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })

    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'Contact Added',
                contact: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error',
                error: err
            })
            
        })
    }

    const getSingleContact = (req,res,next) => {
        let id = req.params.id
        
         Contact.findById(id)
            .then(contact => {
                res.status(200).json({
                    contact
                })
            })

            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message: 'Error',
                    error: err
                })
                
            })
       
    }

const deleteContact = (req,res,next) => {
    let id = req.params.id

    Contact.findByIdAndRemove(id)
        .then(result => {
            res.json({
                message: 'Contact Delete',
                result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error',
                error: err
            })
            
        })
}

const editContact = (req,res,next) => {
    let id = req.params.id

    let updateContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    Contact.findByIdAndUpdate(id, {$set: updateContact})
        .then(contact => {
           
            Contact.findById(contact._id)
                .then(newContact => {
                    res.json({
                        message: 'updated Success',
                        contact
                    })
                })
           
           
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error',
                error: err
            })
            
        })
}

    module.exports = {
        getAllContactController,
        postNewContactController,
        getSingleContact,
        deleteContact,
        editContact
    }