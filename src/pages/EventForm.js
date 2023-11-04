import { Form } from "react-router-dom";
function EventForm(){
    return <Form method="post"> 
    <input type="text" placeholder="Event Name" name="name"/>
    <input type="id" placeholder="Event id" name="id"/>
    <textarea name="desc"/>
    <button type="submit">Submit</button>
</Form>;
}

export default EventForm; 