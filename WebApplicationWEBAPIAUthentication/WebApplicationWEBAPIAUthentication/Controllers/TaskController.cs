using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplicationWEBAPIAUthentication.DAL;

namespace WebApplicationWEBAPIAUthentication.Controllers
{
   // [Authorize]
    //[EnableCors(origins:"https://localhost:44334", headers:"*", methods:"*")]
  //  [EnableCors("*", "*", "*")]
    [Authorize]
    public class TaskController : ApiController
    {
        // get All Tasks
        public HttpResponseMessage Get()
        {
            using (TasksEntities context = new TasksEntities())
            {
                var list = context.Tasks.ToList();
                if (list ==null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "There is no tasks to see");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, list);
                }
            }
        }
        // get Task by ID
        public HttpResponseMessage Get(int id)
        {
            using (TasksEntities context = new TasksEntities())
            {
                var list = context.Tasks.FirstOrDefault(task =>task.Quote == id);
                if (list == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "There is no tasks with id"+id.ToString()+ "to Get");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, list);
                }
            }
        }
        // update task by id 

        public HttpResponseMessage Put(int id,[FromBody] Task TASK)
        {

            using (TasksEntities context = new TasksEntities())
            {

                var task = context.Tasks.FirstOrDefault(tas => tas.Quote == id);
                if (task == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "There is no task with Id: "+id.ToString()+" to update");
                }
                else
                {

                    task.QuoteType = TASK.QuoteType;
                    task.Contact = TASK.Contact;
                    task.Task1 = TASK.Task1;
                    task.DateDue = TASK.DateDue;
                    context.SaveChanges();

                    return Request.CreateResponse(HttpStatusCode.OK, TASK);
                }
            }
        }

        // delete task by id 
        public HttpResponseMessage Delete(int id)
        {
            using (TasksEntities context = new TasksEntities())
            {
                var list = context.Tasks.FirstOrDefault(task => task.Quote == id);
                if (list == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "There is no tasks to delete");
                }
                else
                {
                    context.Tasks.Remove(list);
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, list);
                }
            }
        }

     
        // post task by id     
        public HttpResponseMessage Post([FromBody]Task t)
        {
            using (TasksEntities context = new TasksEntities())
            {
               
                if (t == null)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "make sure your task is right");
                }
                else
                {
                    context.Tasks.Add(t);
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, t);
                }
            }
        }
    }
}
