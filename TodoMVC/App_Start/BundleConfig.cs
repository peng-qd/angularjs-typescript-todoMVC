using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace TodoMVC
{
    public class BundleConfig
    {
        public static void RegisterBundlesJS(BundleCollection bundles)
        {
            bundles.UseCdn = true;

            //generics. 
            bundles.Add(
                new ScriptBundle("~/bundles/angular",
                    "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js")
                    .Include("~/Scripts/angular.js"));

            bundles.Add(
                new ScriptBundle("~/bundles/app")
                    .Include("~/js/app.js"));

        }
    }
}