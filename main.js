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

            list_el.append(task_el);
        });
    });
})(jQuery);