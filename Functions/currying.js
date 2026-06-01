//mail setup

function mail(to){
    return function(subject){
        return function(content){
            console.log(`to : ${to}
subject: ${subject}
content:${content}`)
        }
    }
}
let to = "example@gmail.com";
let subject = "Meeting Reminder";
let content = "Hello, this is a reminder about our meeting scheduled for tomorrow at 10 AM.";
let subject_fun=mail(to);
let content_fun=subject_fun(subject);
content_fun(content);