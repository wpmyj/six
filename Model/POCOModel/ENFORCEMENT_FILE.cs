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
	public partial class ENFORCEMENT_FILE
	{
		public ENFORCEMENT_FILE ToPOCO(bool isPOCO = true){
			return new ENFORCEMENT_FILE(){
				PKID = this.PKID,
				手机号 = this.手机号,
				时间 = this.时间,
				线名 = this.线名,
				行别 = this.行别,
				里程 = this.里程,
				火星经度 = this.火星经度,
				火星纬度 = this.火星纬度,
				下载地址 = this.下载地址,
				是否原图 = this.是否原图,
				描述 = this.描述,
				文件类型 = this.文件类型,
			};
		}
	} 
}
