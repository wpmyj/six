//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class T_SGJHWARN
	{
		public T_SGJHWARN ToPOCO(bool isPOCO = true){
			return new T_SGJHWARN(){
				手机号 = this.手机号,
				起始时间 = this.起始时间,
				结束时间 = this.结束时间,
				超范围类型 = this.超范围类型,
				施工ID = this.施工ID,
				消警 = this.消警,
				PKID = this.PKID,
				类型 = this.类型,
				DEPT_CODE = this.DEPT_CODE,
				WAINCONTENT = this.WAINCONTENT,
				PLAN_ID = this.PLAN_ID,
				线名 = this.线名,
				行别 = this.行别,
				里程 = this.里程,
				火星纬度 = this.火星纬度,
				火星经度 = this.火星经度,
				PHONE_TYPE = this.PHONE_TYPE,
			};
		}
	} 
}
