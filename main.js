(function($){
    $(document).ready(function(){
        const form = $("#to-do-form");
        const input = $("#to-do-input");
        const list_el = $("#tasks");
        $(form).on("submit",(e)=>{
            e.preventDefault(); //don't reload the page upon submitting the task
            
            const task = input.val();
            if(!task){
                alert("Please write down your amazing task!");
                return;
            }

            const task_el = $("div");
            task_el.addClass(".task");

            const task_content_el = $("div");
            task_content_el.addClass("content");

            task_el.append(task_content_el);

        });
    });
})(jQuery);