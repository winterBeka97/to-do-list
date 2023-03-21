(function($){
    $(document).ready(function(){
        const form = $("#to-do-form");
        const input = $("#to-do-input");
        const list_el = $("#tasks");
        
        form.on("submit",(e) => {
            e.preventDefault(); //don't reload the page upon submitting the task
            
            const task = input.val();
            if(!task){
                alert("Please write down your amazing task!");
                return;
            }else{
                console.log(task);
            }
            
            const task_el = $('<div>');
            task_el.addClass('task');

            const task_content_el = $('<div>');
            task_content_el.addClass('content');

            task_el.append(task_content_el);

            const task_input_el = $('<input>').attr('type', 'text').val('');
            task_input_el.addClass('text');
            task_input_el.val(task);
            task_input_el.attr('readonly','readonly');

            task_content_el.append(task_input_el);

            const task_actions_el =$('<div>');
            task_actions_el.addClass('actions');
            
            const task_edit_el = $('<button>');
            task_edit_el.addClass('edit');
            task_edit_el.text('Edit');

            const task_delete_el = $('<button>');
            task_delete_el.addClass('delete');
            task_delete_el.text('Delete');
            
            task_actions_el.append(task_edit_el);
            task_actions_el.append(task_delete_el);

            task_el.append(task_actions_el);

            list_el.append(task_el);

            input.val('');

            task_edit_el.on('click', (e) =>{
                /*task_input_el.removeAttr('readonly');
                task_input_el.focus();
                task_edit_el.removeClass('edit');
                task_edit_el.addClass('save');
                task_edit_el.text('Save');*/
                if(task_edit_el.text().toLowerCase() == "edit"){
                    task_input_el.removeAttr('readonly');
                    task_input_el.focus();
                    task_edit_el.css('background-color','#3DCA3D');
                    task_edit_el.css('color','#f4decb')
                    task_edit_el.text('Save');
                }else{
                    task_edit_el.css('background-color','#B25068');
                    task_edit_el.text('Edit');
                    
                    task_input_el.attr('readonly','readonly');
                    alert('The changes have been saved!');                      
                }
            });

            task_delete_el.on('click', ()=>{
                list_el.find(task_el).remove();
            });
        });

        input.val('');
    });
})(jQuery);