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
	public partial class T_GWBASE
	{
		public T_GWBASE ToPOCO(bool isPOCO = true){
			return new T_GWBASE(){
				监测点 = this.监测点,
				手机号 = this.手机号,
				路局 = this.路局,
				工务段 = this.工务段,
				线名 = this.线名,
				线号 = this.线号,
				行别 = this.行别,
				里程 = this.里程,
				经度 = this.经度,
				纬度 = this.纬度,
				设计锁温 = this.设计锁温,
				锁温浮动 = this.锁温浮动,
				PKID = this.PKID,
				起始里程 = this.起始里程,
				结束里程 = this.结束里程,
				区段 = this.区段,
				锁定轨温 = this.锁定轨温,
				高温门限 = this.高温门限,
				低温门限 = this.低温门限,
			};
		}
	} 
}
