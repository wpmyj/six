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
	public partial class LKJ_ALLOW_SPEED
	{
		public LKJ_ALLOW_SPEED ToPOCO(bool isPOCO = true){
			return new LKJ_ALLOW_SPEED(){
				PKID = this.PKID,
				LINE_NAME = this.LINE_NAME,
				LINE_DIR = this.LINE_DIR,
				SECTION = this.SECTION,
				LINE_ALLOW_SPEED = this.LINE_ALLOW_SPEED,
				FORK_SPEED_STRAIGHT = this.FORK_SPEED_STRAIGHT,
				FORK_SPEED_SIDE = this.FORK_SPEED_SIDE,
				LIMIT_PLACE = this.LIMIT_PLACE,
				LIMIT_SPEED = this.LIMIT_SPEED,
				LIMIT_CAUSE = this.LIMIT_CAUSE,
				REMARKS = this.REMARKS,
				MODIFY_TAG = this.MODIFY_TAG,
				CREATE_TIME = this.CREATE_TIME,
				USER_NAME = this.USER_NAME,
				DEPT_CODE = this.DEPT_CODE,
				LINE_TYPE = this.LINE_TYPE,
			};
		}
	} 
}