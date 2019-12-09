using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using lab2.Models;

namespace lab2.Controllers
{
    public class CatalogController : Controller {
        
        
        private DataContext dbContext;
        // Class constructor 
        public CatalogController(DataContext context){
            this.dbContext = context;
        }
        // default page
        // to show the catalog of CARS available to rent
        public IActionResult Index(){
            return View();

        }

        public IActionResult Register(){
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar ( [FromBody]  Car theCar ){
            
            dbContext.Cars.Add(theCar);     // add the car to the table 
            dbContext.SaveChanges();        // save chnages

            return Json(theCar);            // return the car
            
        }


        [HttpGet]
        public IActionResult GetCatalog(){

         var carList = dbContext.Cars.ToList(); // retirve all records form the table
         return Json(carList);
        }
         
    }
}



